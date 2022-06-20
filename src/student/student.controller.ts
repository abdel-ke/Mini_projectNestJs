import { Body, Controller, Get, Param, Post, Put, ParseUUIDPipe } from "@nestjs/common"
import { createStudentDto, UpdateStudentDto, FindStudentResponseDto, StudentResponseDto } from "../student/dto/student.dto"
import { StudentService } from "./student.service";

@Controller('student')
export class StudentController {
	constructor(private readonly studentService : StudentService) {}

	@Get()
	getStudents() : FindStudentResponseDto[]  {
		return this.studentService.getStudents();
	}
	@Get('/:StudentById')
	getStudentById(
		@Param('StudentById', new ParseUUIDPipe()) sId : string 
	) : FindStudentResponseDto{
		return this.studentService.getStudentById(sId);
	}
	@Post()
	createStudent(
		@Body() body : createStudentDto
	) : StudentResponseDto {
		return this.studentService.createStudent(body);
	}
	@Put('/:studentById')
	updateStudent(
		@Param('studentById') sId : string,
		@Body() body : UpdateStudentDto
	) : StudentResponseDto {
		return this.studentService.updateStudent(body, sId);
	}
}
