import { Component, EventEmitter, Output } from '@angular/core';
import { EventLogService } from '../services/event-log.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-events',
  imports: [FormsModule],
  templateUrl: './create-events.component.html',
})
export class CreateEventsComponent {
  @Output() eventCreated = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  description: string = '';
  type: string = 'Manual';
  date: string = '';

  constructor(private eventLogService: EventLogService) {}

  submit(): void {
    this.eventLogService
      .createEvent({
        description: 'Creado desde Angular',
        type: 'Manual',
        date: new Date().toISOString(),
      })
      .subscribe({
        next: () => {
          this.close.emit();
          alert('Evento creado correctamente');
        },
        error: (err) => {
          console.error('Error creando evento:', err);
        },
      });
  }
  reset() {
    this.description = '';
    this.type = 'Manual';
  }
}
