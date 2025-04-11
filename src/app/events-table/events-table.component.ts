import { Component } from '@angular/core';
import { EventLog, EventLogService } from '../services/event-log.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-events-table',
  imports: [DatePipe, FormsModule],
  templateUrl: './events-table.component.html',
  styleUrl: './events-table.component.css',
})
export class EventsTableComponent {
  constructor(private eventLogService: EventLogService) {}
  loading = false;
  events: EventLog[] = [];
  selectedType: string = '';
  sinceDate: string = '';
  untilDate: string = '';
  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.loading = true;

    const filters: any = {};

    if (this.selectedType) filters.type = this.selectedType;
    if (this.sinceDate) filters.since = this.sinceDate;
    if (this.untilDate) filters.until = this.untilDate;

    this.eventLogService.getEvents(filters).subscribe({
      next: (data) => {
        this.events = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando eventos:', err);
        this.loading = false;
      },
    });
  }

  filterEvents(): void {
    this.getEvents();
  }
}
