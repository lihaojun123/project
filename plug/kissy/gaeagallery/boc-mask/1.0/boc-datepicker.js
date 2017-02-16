/**
 * 中行定制日期选择器
 * 调用方式:ezgallery/boc-datepicker/1.0/boc-datepicker
 * Created by Loski on 2015/2/5.
 */
KISSY.add('gaeagallery/boc-datepicker/1.0/boc-datepicker',function(S,BocDatePickerEntity){
    var tpbocDpe = new BocDatePickerEntity();
    function bocDatepicker(){

        if(typeof this.init !== "function"){
            bocDatepicker.prototype.renderDatepicker = tpbocDpe.renderDatepicker;
            bocDatepicker.prototype.init = tpbocDpe.init;
        }

    }


    return bocDatepicker;
},{
    requires:[
        './boc-dp-entity',
        './css/boc-datepicker.css'
    ]
});
