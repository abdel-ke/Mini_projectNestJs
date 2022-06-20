import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudentTeacherController } from './student.controller';
import { teacher } from './teacher.contoller';
import { TeachersService } from './teachers.service';

@Module({
    imports: [StudentModule],
    controllers: [teacher ,StudentTeacherController],
    providers: [TeachersService]
})
export class TeachersModule {}
