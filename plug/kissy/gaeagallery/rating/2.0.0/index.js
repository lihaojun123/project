/*
 Wed Mar 18 2015 14:01:38 GMT+0800 (CST)
 combined files by KMD:
 index.js
 */

KISSY.add('gaeagallery/rating/2.0.0/index',function(S ,require, exports, module) {
    
    require('gaeagallery/rating/2.0.0/index.css');

    var $ = require('node').all;
    var Base = require('base');
    var DOT = '.', EMPTY = '';
    var Rating = Base.extend({
        initializer:function(){
            var self = this;

            var container = self.get('container');
            if (!container) return;

            var reason = self.get('reason'), level = self.get('level'),
                currentCls = self.get('currentCls');
            container.all(DOT+self.get('itemCls')).each(function(item, i) {
                if (!reason[i]) reason[i] = [];

                item.all('a').each(function(a, j) {
                    reason[i][j] = reason[i][j] || EMPTY;
                    level[j] = level[j] || EMPTY;

                    var sc = a.attr(self.get('valueName')),
                        rs = reason[i][j];

                    a.on('click', function(ev) {
                        ev.halt();

                        item.all(DOT+currentCls).removeClass(currentCls);
                        a.addClass(currentCls);

                        container.all(DOT+self.get('tipsCls')).hide();
                        item.one('input').val(sc);
    
                        if (self.get('resultCls')) {
                            item.one(DOT+self.get('resultCls')).html('<span><em>' + sc + '</em> ��</span> - <strong>' + rs + '</strong>');
                        }

                        self.fire('rating', {idx: i, score: sc});

                    });

                    if (self.get('popCls')) {

                        a.on('mouseenter', function(e) {
                            var obj = new S.Node(e.currentTarget),
                                offset = obj.offset(),
                                coffset = container.offset();

                            container.all(DOT+self.get('popCls'))
                                .html('<span><em>' + sc + '</em> 分' + level[j] + '</span><strong>' + rs + '</strong>')
                                .css({
                                    'left': offset.left + obj.width() - coffset.left - 100+ 'px',
                                    'top': offset.top - coffset.top + obj.height() + 'px'
                                }).show();
                        }).on('mouseleave', function() {
                            container.all(DOT+self.get('popCls')).hide();
                        });

                    }
                    // ie6 change a class to his parent
                    try {
                        if (S.UA.ie === 6) {
                            a.parent().addClass(a.attr('class').split()[0]);
                        }
                    } catch(e) {}
                });

                //默认打分
                var input = item.one("input"), inputVal = input.val();
                item.all("a").item(inputVal-1).fire("click");

            });
        }
    },{
        ATTRS:{
            /**
             * �������
             * @type String|HTMLElement|KISSY.Node
             */
            container: {
                setter: function(v) {
                    if (S.isString(v)) {
                        return S.one(v);
                    }
                    if (v.offset) return v;
                    return new S.Node(v);
                }
            },
            /**
             * Ĭ�ϵ�ԭ���б�
             * @type Array<String>
             */
            reason: {
                value: []
            },
            /**
             * ����̶������б�
             * @type Array<String>
             */
            level: {
                value: []
            },
            /**
             * ��ʾ������
             * @type String
             */
            tipsCls: {
                value: 'rating-tips'
            },
            /**
             * ÿ���������
             * @type String
             */
            itemCls: {
                value: 'shop-rating'
            },
            /**
             * ������ʽ��
             * @type String
             */
            popCls: {
                // value: 'rating-pop-tip'
            },
            /**
             * ��ǰ����
             * @type String
             */
            currentCls: {
                value: 'current-rating'
            },
            /**
             * �����
             * @type String
             */
            resultCls: {
                // value: 'result'
            },
            /**
             * ȡֵ����
             * @type String
             */
            valueName: {
                value: 'data-star-value'
            }
        }
    });

    module.exports = Rating;


});