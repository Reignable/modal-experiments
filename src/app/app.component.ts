import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ModalComponent } from './modal/modal.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
