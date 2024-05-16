import { animate, state, style, transition, trigger } from '@angular/animations'
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, inject } from '@angular/core'
import { A11yModule } from '@angular/cdk/a11y'
import { coerceBooleanProperty } from '@angular/cdk/coercion'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  standalone: true,
  imports: [A11yModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', animate(200)),
    ]),
  ],
})
export class ModalComponent {
  _hideClose = false
  @Input() set hideClose(value: string | boolean) {
    this._hideClose = coerceBooleanProperty(value)
  }

  @Output() private opened = new EventEmitter<void>()
  @Output() private closed = new EventEmitter<void>()

  private changeDetectorRef = inject(ChangeDetectorRef)
  private _open = false

  get open() {
    return this._open
  }

  openModal(): void {
    this._open = true
    this.opened.emit()
    this.changeDetectorRef.markForCheck()
  }

  closeModal(): void {
    this._open = false
    this.closed.emit()
    this.changeDetectorRef.markForCheck()
  }
}
