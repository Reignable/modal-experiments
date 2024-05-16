import { ChangeDetectionStrategy, Component } from '@angular/core'
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
  handleModalOpened(): void {
    console.log('Modal opened')
  }

  handleModalClosed(): void {
    console.log('Modal closed')
  }
}
