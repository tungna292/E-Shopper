$(document).ready(function(){
    var abc = JSON.parse(localStorage.getItem('demo')) ;
        var html = '';
        var Sum =0;
        Object.keys(abc).map((key, value) => {
            var price = abc[key]['price'].split('$');
            Sum = (parseInt(Sum) + (abc[key]['qty']*price[1]))
            
            html+= "<tr>" +
                        "<td class='cart_product'>" +
                            "<a><img src= "+ abc[key]['image'] + "></a>" +
                        "</td>"+
                        "<td class='cart_description'>" +
                            "<h4><a href=''>"+ abc[key]['title'] + "</a></h4>" +
                            "<p>Web ID: 1089772</p>" +
                        "</td>" +
                        "<td class='cart_price'>"+
                            "<p>"+ abc[key]['price'] + "</p>"+
                        "</td>"+
                        "<td class='cart_quantity'>"+
                            "<div class='cart_quantity_button'>"+
                                "<a class='cart_quantity_up' id="+key+"  > + </a>"+
                                "<input class='cart_quantity_input' id='qty_"+key+"' type='text' name='quantity' value="+ abc[key]['qty'] +" autocomplete='off' size='2'>"+
                                "<a class='cart_quantity_down' id="+key+" > - </a>"+
                            "</div>"+
                        "</td>"+
                        "<td class='cart_total'>"+
                            "<p class='cart_total_price' id ='total_"+key+"'>"+ '$'+(abc[key]['qty']*price[1] )+ "</p>"+
                        "</td>"+
                        "<td class='cart_delete'>"+
                            "<a class='cart_quantity_delete'  id="+key+" ><i class='fa fa-times'></i></a>"
                        "</td> "
                    "</tr>";
        })
        // console.log(Sum)
        $("table tbody").append(html);

    $("#totalAll").text('$'+Sum)

    $(".cart_quantity_up").click(function(){
        var getId = $(this).attr('id');
        // console.log(getId)
        // console.log(getIdtotal)
        Object.keys(abc).map((key,value) => {
            if(getId==key){
                var price = abc[key]['price'].split('$')
                // console.log(price[1])
                abc[key]['qty']=abc[key]['qty']+1;
                $("#qty_"+key).val(abc[key]['qty']);
                abc[key]['total'] = '$' + (price[1]* abc[key]['qty'])
                // console.log(abc[key]['total'])
                $(this).closest('tr').find('.cart_total_price' ).text(abc[key]['total'])
                Sum = parseInt(Sum) + parseInt(price[1])
                $("#totalAll").text('$'+Sum)
                // $("#total_"+key).text("$"+ abc[key]['total'])
                // var str = 'tu tue';
                // console.log(str.replace(' tu','a'));
                // console.log(str.replace(' tu',''));
            }
            
        })	
        localStorage.setItem('demo',JSON.stringify(abc))
    })
    $(".cart_quantity_down").click(function(){
        var getId = $(this).attr('id');
        // console.log(getId)
        Object.keys(abc).map((key,value) => {
            if(getId==key && abc[key]['qty']>=1){
                var price = abc[key]['price'].split('$')
                abc[key]['qty']=abc[key]['qty']-1;
                $("#qty_"+key).val(abc[key]['qty']);
                abc[key]['total'] = '$' + ( price[1]* abc[key]['qty'])
                // console.log(abc[key]['total'])
                // $("#total_"+key).text("$"+ abc[key]['total'])
                $(this).closest('tr').find('.cart_total_price' ).text(abc[key]['total'])
                Sum = parseInt(Sum) - parseInt(price[1])
                $("#totalAll").text('$'+Sum);
                
                
            }
            if(getId==key && abc[key]['qty']<1){
                $(this).closest('tr').remove()
                delete abc[getId]
            }
        
        })
        localStorage.setItem('demo',JSON.stringify(abc))
    })
    $(".cart_quantity_delete").click(function(){
        var getId =$ (this).attr('id');
        Object.keys(abc).map((key,value) => {
            $(this).closest('tr').remove();
            delete abc[getId]
        })
        localStorage.setItem('demo',JSON.stringify(abc))
    })
});