import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output, inject } from '@angular/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Output() opened = new EventEmitter<void>()
  @Output() closed = new EventEmitter<void>()

  changeDetectorRef = inject(ChangeDetectorRef)
  open = false

  openModal(): void {
    this.open = true
    this.opened.emit()
    this.changeDetectorRef.markForCheck()
  }

  closeModal(): void {
    this.open = false
    this.closed.emit()
    this.changeDetectorRef.markForCheck()
  }
}
