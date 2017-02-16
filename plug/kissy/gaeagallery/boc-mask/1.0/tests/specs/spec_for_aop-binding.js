/**
 * 测试类 aop-binding
 * @author Loski
 * @requires gaeagallery/aop/1.0/aop-binding
 */
KISSY.add(function (S, AOP) {
    /**
     * 测试套件 1-Test for unbinding
     * function unbinding()
    */
    describe("1-Test for unbinding:", function () {
        it("1.1-unbind for origin Function while passing \"auto\" or true",function(){
            var tmpaop = new AOP();
            tmpaop.init("auto");
            expect(typeof Function.prototype.before).toBe("function");

            var bool = tmpaop.unbind();
            expect(bool).toBe(true);
            expect(typeof  Function.prototype.before).toBe("undefined");
        });
       it("1.2-unbind for origin Function while passing undefined",function(){
            var tmpaop = new AOP();
            tmpaop.init();
            expect(typeof Function.prototype.before).toBe("function");

            var bool = tmpaop.unbind();
            expect(bool).toBe(true);
            expect(typeof  Function.prototype.before).toBe("undefined");
        });
        it("1.3-unbind for origin Function while passing \"handy\" false",function(){
            var tmpaop = new AOP();
            var obj = tmpaop.init("handy");
            //测function b2obj返回值类型
            expect(typeof obj).toBe("object");
            //测function b2obj运行绑定情况
            expect(typeof  obj.before).toBe("function");
            //测是否干扰到其他分支
            expect(typeof Function.prototype.before).toBe("undefined");

            var bool = tmpaop.unbind();
            //测试解绑函数unBinding，返回false证明分支执行正确
            expect(bool).toBe(false);
            //测解绑后是否干扰其他分支
            expect(typeof  Function.prototype.before).toBe("undefined");
            obj = null;
            function tstObjBefore(){
                try{
                    obj.before();
                }catch (e){
                    throw e;
                }
            }
            //测是否成功摧毁obj
            expect(tstObjBefore).toThrow("Cannot call method 'before' of null");

        });

    });
    /**
     * 测试套件 2-Test for modeBinding
     * function modeBinding()
     */
    describe("2-Test for modebinding:", function () {
      /*  it("2.1-unbind for origin Function while passing \"auto\" or true",function(){
            var tmpaop = new AOP();
            tmpaop.init("auto");
            expect(typeof Function.prototype.before).toBe("function");
            tmpaop.unbind();
            expect(typeof  Function.prototype.before).toBe("undefined");
        });
        it("2.1-unbind for origin Function while passing undefined",function(){
            var tmpaop = new AOP();
            tmpaop.init();
            expect(typeof Function.prototype.before).toBe("function");
            tmpaop.unbind();
            expect(typeof  Function.prototype.before).toBe("undefined");
        });*/


    });
}, {
//	attach:true,
    requires: ['gaeagallery/aop/1.0/aop-binding']
});

