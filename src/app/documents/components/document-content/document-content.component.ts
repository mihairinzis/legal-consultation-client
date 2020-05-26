import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '@app/shared/components/base-component';
import { DocumentNode, DocumentNodeType } from '@app/core';

@Component({
  selector: 'app-document-content',
  templateUrl: './document-content.component.html',
  styleUrls: ['./document-content.component.scss']
})
export class DocumentContentComponent extends BaseComponent {
  @Input() documentNodes: DocumentNode[];
  @Input() addCommentModeForNode: Map<string, boolean>;
  @Output() toggleCommentAdding: EventEmitter<string> = new EventEmitter<string>();
  documentNodeTypeEnum: typeof DocumentNodeType = DocumentNodeType;

  public clickedAddComment(nodeId: string) {
    this.toggleCommentAdding.emit(nodeId);
  }

  public commentsEnabled(nodeId: string) {
    return !!this.addCommentModeForNode && this.addCommentModeForNode.has(nodeId) &&
        this.addCommentModeForNode.get(nodeId);
  }
}
