const tiendas = {"1002":"29.160.1.252",
"1003":"29.160.9.252",
"1004":"29.160.17.252",
"1005":"29.160.25.252",
"1006":"29.160.33.252",
"1007":"29.160.41.252",
"1008":"29.160.137.252",
"1010":"29.160.169.252",
"1011":"10.4.17.252",
"1012":"29.160.185.252",
"1013":"29.160.201.252",
"1014":"29.160.233.252",
"1015":"29.160.241.252",                                    
"1016":"29.160.145.252",
"1017":"29.160.153.252",
"1018":"29.160.161.252",
"1020":"29.160.209.252",
"1021":"29.160.193.252",
"1022":"29.161.17.252",
"1023":"29.161.1.252",
"1024":"29.161.9.252",
"1026":"29.161.41.252",
"1027":"29.161.25.252",
"1028":"29.161.49.252",
"1029":"29.161.57.252",
"1030":"29.161.33.252",
"1031":"29.161.65.252",
"1032":"29.161.73.252",
"1033":"29.161.81.252",
"1035":"29.161.177.252",
"1036":"29.161.161.252",
"1037":"29.161.169.252",
"1038":"29.161.129.252",
"1039":"29.161.137.252",
"1042":"29.161.153.252",
"1043":"29.161.185.252",
"1044":"29.161.193.252",
"1045":"29.161.201.252",
"1046":"29.161.209.252",
"1050":"29.161.217.252",
"1051":"29.161.225.252",
"1052":"29.161.233.252",
"1053":"29.161.241.252",
"1054":"29.161.249.252",
"1055":"29.162.1.252",
"1056":"29.162.9.252",
"1057":"29.162.17.252",
"1058":"29.162.137.252",
"1059":"29.162.57.252",
"1060":"29.162.65.252",
"1061":"29.162.25.252",
"1067":"29.162.73.252",
"1068":"29.162.145.252",
"1074":"29.162.105.252",
"1075":"29.162.113.252",
"1076":"29.162.161.252",
"1077":"29.162.169.252",
"1078":"29.162.177.252",
"1080":"29.162.193.252",
"1081":"29.162.201.252",
"1082":"29.162.249.252",
"1084":"29.162.217.252",
"1085":"29.162.225.252",
"1086":"29.162.233.252",
"1087":"29.163.113.252",
"1088":"29.163.89.252",
"1092":"29.163.81.252",
"1093":"29.163.97.252",
"1096":"29.163.121.252",
"1097":"29.163.57.252",
"1098":"29.163.49.252",
"1099":"29.163.41.252",
"1100":"29.163.129.252",
"1106":"29.163.145.252",
"1108":"29.163.177.252",
"1110":"29.163.193.252",
"1111":"29.163.185.252",
"1114":"29.163.201.252",
"1115":"29.163.209.252",
"1116":"29.163.233.252",
"1119":"29.163.249.252",
"2997":"29.160.49.252",
"2998":"29.160.57.252",
"2999":"29.160.65.252",
"3601":"29.160.73.252",
"3602":"29.160.81.252",
"3603":"29.160.89.252",
"3604":"29.160.97.252",
"3605":"29.160.105.252",
"3606":"29.160.113.252",
"3608":"29.160.121.252",
"3613":"29.160.129.252",
"4001":"10.128.11.60"};
    
       export function SearchTienda(text){
        if (text !== "") {
          Object.keys(tiendas).forEach((clave) => {
              if (clave === text) {
                  const valor = tiendas[clave];
                  // Abrir una nueva ventana o pestaña
  var nuevaVentana = window.open(`https://${valor}:8443/WebFrontBase/~./core/login.zul`, '_blank');

  // Esperar a que la ventana se abra completamente
  nuevaVentana.onload = function() {
    // Enviar credenciales a la ventana o pestaña abierta
    nuevaVentana.postMessage({ username: 9999, password: 1111 }, `https://${valor}:8443/WebFrontBase/~./core/login.zul`);
  };
              }
          });
        }
        else{
          window.alert("Ingrese número de tienda!!!");
        }
      }