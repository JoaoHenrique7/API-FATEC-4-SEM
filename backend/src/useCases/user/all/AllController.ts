import { Request, Response } from "express";
import AllUC from "./AllUC";

export default class AllController {
    /**
     * Initializes a new instance of the constructor.
     *
     * @param {AllUC} AllUC - an instance of the AllUC class
     */
    constructor(
        private AllUC: AllUC
    ) {}

    /**
     * Retrieves all users.
     *
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     * @return {Promise<Response>} The response object containing the result of the operation.
     */
    async all(req: Request, res: Response) : Promise<Response> {
        return res.status(200).json({
            Ok: true,
            Message: "All users...",
            Data: await this.AllUC.execute()
        });
    }
}