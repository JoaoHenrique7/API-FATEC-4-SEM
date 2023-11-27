import RegistryRepository from "../../../repositories/implementation/RegistryRepository";
import AllController from "./AllController";
import AllUC from "./AllUC";

export const all = new AllController(
    new AllUC(
        new RegistryRepository()
    )
);