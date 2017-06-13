 
 
         var nameloop = function(rows, collumns) {
            var TileArray = Array();
                var rowcount = 1;
                var collumncount = 1;
                for (var num = 0; num< rows*collumns; num++){
                   
                    if (rowcount <= rows){
                         TileArray[num] = String.fromCharCode(96 + collumncount) + rowcount;
                         rowcount ++;
                    } else {
                        rowcount = 1;
                        collumncount ++;
                        TileArray[num] = String.fromCharCode(96 + collumncount) + rowcount;
                        rowcount ++;
                    }
                }   
                return TileArray

             }      
            var rows = 10
            var collumns = 10
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
                   if (toggle == 'True'){
                        board +='<td bgcolor= "#331a00">' + '<img src ="blank.png" style="width:40px;height:40px;" >' + '</td>';
                        toggle = 'False'
                    } else{
                        board +='<td bgcolor= "#ffffff">' + '<img src ="blank.png" style="width:40px;height:40px;" >' + '</td>';
                        toggle = 'True'
                    }

                    nums++;
                   }
                if (toggle == 'True'){
                    toggle = 'False';
                }else{
                    toggle = 'True'
                }
                    }
                board += "</tr>";   
        board+= "</table>";
        document.write( board);