/**
 * Created by LH on 2019/3/4.
 */
public class MessageServiceImpl {
    private  String username;
    private  int age;
    public  MessageServiceImpl (String username,int age) {
        this.age = age;
    }
    public String getMessage(){
        return"hello world!"+username+",age is"+age;
    }
}
