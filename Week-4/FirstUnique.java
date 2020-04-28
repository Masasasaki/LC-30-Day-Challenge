import java.util.*;
class FirUni {
    Set<Integer> uni = new LinkedHashSet<>();
    Set<Integer> all = new HashSet<>();
    public FirUni(int[] nums) {
        for (int num : nums) {
            add(num);
        }
    }
    
    public int showFirstUnique() {
        if (uni.isEmpty()) {
            return -1;
        }
        return uni.iterator().next();
    }
    
    public void add(int value) {
        if (all.add(value)) {
            uni.add(value);
        } else {
            uni.remove(value);
        }
    }
}

public class FirstUnique {
    public static void main(String[] args) {
        int[] nums = {698,866,349,680,733,916,961,652,161,960,417,813,474,170,802,406,442,454,780,886,899,367,786,157,953,621,29,273,485,55,563,275,343,157,715,683,608,932,874,241,796,877,845,26,719,167,415,287,411,95,196,118,291,811,969,27,805,323,707,625,651,588,445,690,706,694,317,978,327,764,366,18,104,753,791,94,912,171,923,969,457,717,694,147,329,12,84,650,592,383,506,924,939,495,999,120,529,117,446,830,740,108,791,518,83,164,606,172,783,808};
        FirUni f = new FirUni(nums);
        f.add(657);
        f.add(942);
        f.add(901);
        f.add(1000);
        f.add(538);
        System.out.println(f.showFirstUnique());
    }
}