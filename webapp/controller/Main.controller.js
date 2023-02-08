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
                            tipo: "fone",
                            valor: "(31)34974022"
                        },
                        {
                            nome: "email",
                            tipo: "email",
                            valor: "test@teste.com"
                        },
                        {
                            nome: "celular",
                            tipo: "fone",
                            valor: "(31)975649832"
                        }
                     ]
                    }
                }
                var oModel = new sap.ui.model.json.JSONModel(oDados);
                this.getView().setModel(oModel, "dados");


            }
        });
    });
