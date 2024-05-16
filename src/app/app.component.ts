import { ChangeDetectionStrategy, Component, ViewChild, signal } from '@angular/core'
import { ModalComponent } from './modal/modal.component'
import { ModalTriggerDirective } from './modal-trigger.directive'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModalComponent, ModalTriggerDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild(ModalComponent) modal: ModalComponent | undefined

  thingDone = signal(false)

  handleModalOpened(): void {
    console.log('Modal opened event')
  }

  handleModalClosed(): void {
    console.log('Modal closed event')
  }

  doTheThing(): void {
    console.log('Doing the thing')
    this.modal?.closeModal()
    this.thingDone.set(true)
  }

  dontDoTheThing(): void {
    console.log('Not doing the thing')
    this.modal?.closeModal()
  }

  openModal(): void {
    console.log('Opening modal from app component')
    if (this.modal) {
      this.modal.openModal()
    }
  }
}
