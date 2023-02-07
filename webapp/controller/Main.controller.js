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
                     estado: ""
                    }
                }
                var oModel = new sap.ui.model.json.JSONModel(oDados);
                this.getView().setModel(oModel, "dados");


            }
        });
    });
