import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface EventLog {
  id?: string;
  description: string;
  type: 'API' | 'Manual';
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventLogService {
  private readonly baseUrl =
    'https://yfq7ynt572.execute-api.us-east-2.amazonaws.com/event-log';

  constructor(private http: HttpClient) {}

  getEvents(filters?: any): Observable<EventLog[]> {
    let params = new HttpParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          params = params.set(key, value as string);
        }
      });
    }
    const logs = this.http.get<EventLog[]>(this.baseUrl, { params });

    return logs;
  }

  createEvent(event: EventLog): Observable<EventLog> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<EventLog>(this.baseUrl, event, { headers });
  }
}
