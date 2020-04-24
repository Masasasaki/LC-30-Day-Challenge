import java.util.*;
class LRUCache {
    private LinkedList<Integer> queue;
    private HashMap<Integer, Integer> map;
    private int limit;
    public LRUCache(int capacity) {
        queue = new LinkedList<>();
        map = new HashMap<>();
        limit = capacity;
    }
    
    public int get(int key) {
        if (map.containsKey(key)) {
            updateCache(key);
            return map.get(key);
        }
        return -1;
    }
    
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            map.put(key, value);
            updateCache(key);
        } else {
            if (queue.size() == limit) {
                int removedKey = queue.poll();
                map.remove(removedKey);
            }
            map.put(key, value);
            queue.add(key);
        }
    }

    public void updateCache(int key) {
        Object[] arr = queue.toArray();
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].equals(key)) {
                queue.remove(i);
            }
        }
        queue.add(key);
    }
}

public class Cache {
    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(2,1);
        cache.put(1,1);
        cache.put(2,3);
        cache.put(4,1);
        System.out.println(cache.get(1));
        System.out.println(cache.get(2));
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */

 