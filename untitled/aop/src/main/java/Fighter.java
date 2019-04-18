/**
 * Created by LH on 2019/3/11.
 */
public class  Fighter{

@Pointcut("execution(* com.waylau.spring.aop.Tiger.walk())")

    public void foundTiger(){
    }
    @Before(value ="foundTiger()")
    public void foundBefore(){
    System.out.println("Fighter wait for tiger...");
    }
    @AfterReturning("foundTiger()")
    public void foundTiger(){
        System.out.println("Fighter fight with tiger...");
    }

}
