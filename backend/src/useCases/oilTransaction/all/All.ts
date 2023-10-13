import OilTransactionRepository from "../../../repositories/implementation/OilTransactionRepository";
import AllController from "./AllController";
import AllUC from "./AllUC";

export const all = new AllController(
    new AllUC(
        new OilTransactionRepository()
    )
);