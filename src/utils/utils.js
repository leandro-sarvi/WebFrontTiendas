const tiendas = [1002,1003,1004,1005,1006,1007,1008,1010,1011,1012,1013,1014,1015,1016,1017,1018,1020,1021,1021,1022,1023,1024,1026,1027,1028,1029,1030
    ,1031,1032,1033,1035,1035,1036,1037,1038,1039,1042,1043,1044,1045,1046,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1067,1068,1074,1075,
    1076,1077,1078,1080,1081,1082,1084,1085,1086,1087,1088,1092,1093,1096,1097,1098,1099,1100,1106,1108,1110,1111,1114 ,1115 ,1116,1119,2997,2998,2999,3601,
    3602,3603,3604,3605,3606,3608,3613]
    
       export function SearchTienda(text){
        if(text!==""){
          tiendas.forEach((elem)=>{
            if(elem == text){
              window.open(`https://ars0${elem}.dorinka.com:8443/WebFrontBase/~./core/login.zul`);
             }
          });
        }
        else{
          window.alert("Ingrese número de tienda!!!");
        }
      }