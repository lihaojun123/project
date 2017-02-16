/**
 * 中行定制日期选择器
 * 调用方式:ezgallery/boc-datepicker/1.0/boc-datepicker
 * Created by Loski on 2015/2/5.
 */
KISSY.add('gaeagallery/boc-datepicker/1.0/boc-datepicker-flat',function(S,BocDatePicker){
    var tpbocDp = new BocDatePicker();
    function fbocDatepicker(){

        if(typeof this.init !== "function"){
            fbocDatepicker.prototype.renderDatepicker = tpbocDp.renderDatepicker;
            fbocDatepicker.prototype.init = tpbocDp.init;
        }

    }

    return fbocDatepicker;
},{
    requires:[
        './boc-dp-entity',
        './css/boc-datepicker_flat.css'
    ]
});
