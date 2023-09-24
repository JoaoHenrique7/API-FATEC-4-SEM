import UserRepository from "../../../repositories/implementation/UserRepository";
import AllController from "./AllController";
import AllUC from "./AllUC";

export const all = new AllController(
    new AllUC(
        new UserRepository()
    )
);