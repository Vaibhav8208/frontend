import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service'; // Assuming you have a service to handle backend

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html'
})
export class AttendanceComponent implements OnInit {
  students: any[] = [];

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    // Call your service to fetch the students (based on teacher or class)
    this.attendanceService.getStudentsForClass().subscribe((data: any) => {
      this.students = data;
    });
  }

  markAttendance() {
    const attendanceData = this.students.map(student => ({
      studentId: student.id,
      isPresent: student.isPresent
    }));

    // Call the service to submit attendance data
    this.attendanceService.submitAttendance(attendanceData).subscribe(response => {
      alert('Attendance marked successfully!');
    });
  }
}
