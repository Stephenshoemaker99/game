 
 
         var nameloop = function(rows, collumns) {
            var TileArray = Array();
                var rowcount = 1;
                var collumncount = 1;
                var tex1 ='<img src ="grass1.png" style="width:px;height:40px;" >'
                var tex2 = '<img src ="grass2.png" style="width:40px;height:40px;" >'
                for (var num = 0; num< rows*collumns; num++){
                   
                    if (rowcount <= rows){
                         if (toggle == 'True'){
                            TileArray[num] = '<td>' + tex1 + '</td>';
                            toggle = 'False'
                        } else{
                            TileArray[num] ='<td>' + tex2 + '</td>';
                            toggle = 'True'
                        }
                         rowcount ++;
                    } else {
                        rowcount = 1;
                         if (toggle == 'True'){
                       
                        TileArray[num] ='<td>' + tex2 + '</td>';
                        toggle = 'True'
                        } else{
                      
                         TileArray[num] ='<td>' + tex1 + '</td>';
                        toggle = 'False'
                        }
                        rowcount ++;
                    }
                }   
                return TileArray

             }      
            var rows = 30
            var collumns = 30
            var TileArray = nameloop(rows,collumns)
            var nums = 0
            var toggle = 'True'
            console.log(TileArray)  
    var board = 
        "<table>";
            for(var x = 0; x < rows; x ++){
                    board+= "<th></th>"
                }
            for (var i=0; i< (collumns); i++) {
                board += "<tr>";
                for (var z = 0; z < rows; z ++){
                   board += TileArray[nums]

                    nums++;   
                   }
                board += "</tr>";
            }
        board+= "</table>";
        document.write( board);