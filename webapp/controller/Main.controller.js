sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projdataba.controller.Main", {
            onInit: function () {

                var oDados = {
                    pessoa: {
                     nome: "",
                     sobrenome: "",
                     estado: "",
                     contatos: [
                        {
                            nome: "telefone",
                            tipo: 1,
                            valor: "(31)34974022"
                        },
                        {
                            nome: "email",
                            tipo: 2,
                            valor: "test@teste.com"
                        },
                        {
                            nome: "celular",
                            tipo: 3,
                            valor: "(31)975649832"
                        }
                     ]
                    }
                }
                var oModel = new sap.ui.model.json.JSONModel(oDados);
                this.getView().setModel(oModel, "dados");

                var oView = this.getView();
                sap.ui.getCore().getMessageManager().registerObject(oView, true);
            },

            onTablePress:function(oEvent){
                var oSelect = oEvent.getSource();
                var oContext = oSelect.getBindingContext("dados");
                var sPath = oContext.getPath();
                
                var oPainel = this.byId("painelDet");
                    oPainel.bindElement(
                    {
                        path: sPath,
                        model: "dados"
                    }
                )
            }
        });
    });
    
  
  