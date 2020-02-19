---
title: Java Android-Thread—Event-Loop
lang: zh
meta:
  - name: description
    content: Java Thread—Event-Loop
  - name: keywords
    content: Java Thread—Event-Loop
---

# 事件线程编码案例

> 摘抄自socket.io 框架源码

```java
//The thread for event loop. All non-background tasks run within this thread.
public class EventThread extends Thread {

    private static final Logger logger = Logger.getLogger(EventThread.class.getName());

    private static final ThreadFactory THREAD_FACTORY = new ThreadFactory() {
        @Override
        public Thread newThread(Runnable runnable) {
            thread = new EventThread(runnable);
            thread.setName("EventThread");
            thread.setDaemon(Thread.currentThread().isDaemon());
            return thread;
        }
    };

    private static EventThread thread;

    private static ExecutorService service;

    private static int counter = 0;


    private EventThread(Runnable runnable) {
        super(runnable);
    }

    /**
     * check if the current thread is EventThread.
     *
     * @return true if the current thread is EventThread.
     */
    public static boolean isCurrent() {
        return currentThread() == thread;
    }

    /**
     * Executes a task in EventThread.
     *
     * @param task
     */
    public static void exec(Runnable task) {
        if (isCurrent()) {
            task.run();
        } else {
            nextTick(task);
        }
    }

    /**
     * Executes a task on the next loop in EventThread.
     *
     * @param task
     */
    public static void nextTick(final Runnable task) {
        ExecutorService executor;
        synchronized (EventThread.class) {
          counter++;
          if (service == null) {
              service = Executors.newSingleThreadExecutor(THREAD_FACTORY);
          }
          executor = service;
        }

        executor.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    task.run();
                } catch (Throwable t) {
                    logger.log(Level.SEVERE, "Task threw exception", t);
                    throw t;
                } finally {
                    synchronized (EventThread.class) {
                        counter--;
                        if (counter == 0) {
                            service.shutdown();
                            service = null;
                            thread = null;
                        }
                    }
                }
            }
        });
    }
}
```


## 使用方法
```java
 final Timer timer = new Timer();
 timer.schedule(new TimerTask() {
 @Override
 public void run() {
    EventThread.exec(new Runnable() {
        @Override
        public void run() {
            logger.fine(String.format("connect attempt timed out after %d", timeout));
            openSub.destroy();
            socket.close();
            socket.emit(Engine.EVENT_ERROR, new SocketIOException("timeout"));
            self.emitAll(EVENT_CONNECT_TIMEOUT, timeout);
        }
    });
 }
}, timeout);
```


```java
 final Runnable done = new Runnable() {
    @Override
    public void run() {
        // fake drain
        // defer to next tick to allow Socket to clear writeBuffer
        EventThread.nextTick(new Runnable() {
            @Override
            public void run() {
                self.writable = true;
                self.emit(EVENT_DRAIN);
            }
        });
    }
};
```
