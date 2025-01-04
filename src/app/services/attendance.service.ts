import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  constructor(private http: HttpClient) { }

  getStudentsForClass(): Observable<any> {
    return this.http.get('/api/attendance/students'); // Your API endpoint to get students
  }

  submitAttendance(attendanceData: any): Observable<any> {
    return this.http.post('/api/attendance/mark', attendanceData); // Your API endpoint to submit attendance
  }
}
