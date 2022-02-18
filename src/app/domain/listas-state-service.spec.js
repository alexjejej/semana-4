var listas_state_model = require("~/app/domain/listas-state.service");

describe("reducersListas", () => {
    it("should reduce init data", () => {
        var prevState = listas_state_model.initializeListasState();
        var action = new listas_state_model.InitMyDataAction("listas 1", "listas 2");
        var newState = listas_state_model.reducerListas(prevState, action);
        expect(newState.items.length).toEqual(2);
        expect(newState.items[0].titulo).toEqual("lista 1");

    });
    it("should reduce new item added", () => {
        var prevState = listas.initializeListasState();
        var action = new listas.NuevaListaAction(new listas_state_model.Listas("lista 3"));
        var newState =listas_state_model.reducerListas(prevState, action);
        expect(newState.items.length).toEqual(1);
        expect(newState.items[0].titulo).toEqual("listas 3");
    });
    it("should reduce new item added v2", () => {
        var prevState = listas.initializeListasState();
        var action = new listas.NuevaListaAction(new listas_state_model.Listas("lista 3"));
        var newState =listas_state_model.reducerListas(prevState, action);
        expect(newState.items.length).toEqual(1);
        expect(newState.items[0].titulo).toEqual("listas 3");
    });
});