import {Express} from "express";
// import routes
// import services
import {MigrationService} from "./base/migration.service";
// Lazy Begin Imports
import {CortexConn} from "./connections/cortex.conn";
import {ExampleConn} from "./connections/example.conn";
// Lazy End Imports

export class MicroServiceApp implements IMicroServiceApp {

    getSyncProcess(): any[] {

        // register connections of the microservice
        // new MigrationService().registerConnection('placeholder', placeholderConn);

        // array of promises to be completed before run the application
        return [
            // Lazy Begin Promises
            CortexConn,
            ExampleConn,
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
            CortexConn.model('Story'),
            CortexConn.model('StoryLogEntry'),
            ExampleConn.model('Example'),
            // Lazy End Bro
        ]
    }

}
