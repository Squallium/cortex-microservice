import {Express} from "express";
// import routes
// import services
import {MigrationService} from "./base/migration.service";
// Lazy Begin Imports
import {ComicConn} from "./connections/comic.conn";
// Lazy End Imports

export class MicroServiceApp implements IMicroServiceApp {

    getSyncProcess(): any[] {

        // register connections of the microservice
        // new MigrationService().registerConnection('placeholder', placeholderConn);

        // array of promises to be completed before run the application
        return [
            // Lazy Begin Promises
            ComicConn,
            // Lazy End Promises
        ]
    }

    setRoutes(app: Express): void {
        // app.use('/products', ProductRoutes);
        // app.use('/orders', OrderRoutes);
    }

    getAdminBroResources(): any[] {
        return [
            // Lazy Begin Bro
            ComicConn.model('Publisher'),
            // Lazy End Bro
        ]
    }

}
