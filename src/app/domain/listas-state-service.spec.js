const listas_state_model = require("~/app/domain/listas-state.service");

describe("reducersListas", () => {
    it("should reduce init data", () => {
        const prevState = listas_state_model.initializeListasState();
        const action = new listas_state_model.InitMyDataAction("listas 1", "listas 2");
        const newState = listas_state_model.reducerListas(prevState, action);
        expect(newState.items.length).toEqual(2);
        expect(newState.items[0].titulo).toEqual("lista 1");

    });
    it("should reduce new item added", () => {
        const prevState = listas.initializeListasState();
        const action = new listas.NuevaListaAction(new listas_state_model.Listas("lista 3"));
        const newState =listas_state_model.reducerListas(prevState, action);
        expect(newState.items.length).toEqual(1);
        expect(newState.items[0].titulo).toEqual("listas 3");
    });
});