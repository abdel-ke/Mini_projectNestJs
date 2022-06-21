import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ValidStudentMiddleWare } from 'src/common/middleware/student.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService]
})
export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidStudentMiddleWare).forRoutes({
            path: 'student/:studentId',
            method: RequestMethod.GET
        });
        consumer.apply(ValidStudentMiddleWare).forRoutes({
            path: 'student/:studentId',
            method: RequestMethod.PUT
        });
    }
}
