'use client';

import '@ui5/webcomponents-fiori/dist/UploadCollection.js';
import type {
  UploadCollectionItemDeleteEventDetail,
  UploadCollectionSelectionChangeEventDetail
} from '@ui5/webcomponents-fiori/dist/UploadCollection.js';
import type { DragEventHandler, ReactNode } from 'react';
import { ListMode } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface UploadCollectionAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * By default there will be drag and drop overlay shown over the `UploadCollection` when files are dragged. If you don't intend to use drag and drop, set this property.
   *
   * **Note:** It is up to the application developer to add handler for `onDrop` event and handle it. `UploadCollection` only displays an overlay.
   */
  hideDragOverlay?: boolean;
  /**
   * Defines the mode of the `UploadCollection`.
   *
   * **Note:**
   *
   * *   `None`
   * *   `SingleSelect`
   * *   `SingleSelectBegin`
   * *   `SingleSelectEnd`
   * *   `MultiSelect`
   * *   `Delete` - this mode has no effect. The delete button is controlled by the `hideDeleteButton` property of UploadCollectionItem
   */
  mode?: ListMode | keyof typeof ListMode;
  /**
   * Allows you to set your own text for the 'No data' description.
   */
  noDataDescription?: string;
  /**
   * Allows you to set your own text for the 'No data' text.
   */
  noDataText?: string;
}

export interface UploadCollectionDomRef extends UploadCollectionAttributes, Ui5DomRef {}

export interface UploadCollectionPropTypes extends UploadCollectionAttributes, Omit<CommonProps, 'onDrop'> {
  /**
   * Defines the items of the `UploadCollection`.
   * **Note:** Use `UploadCollectionItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the `UploadCollection` header.
   *
   * **Note:** If `header` slot is provided, the labelling of the `UploadCollection` is a responsibility of the application developer. `accessibleName` should be used.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Fired when an element is dropped inside the drag and drop overlay.
   *
   * **Note:** The `onDrop` event is fired only when elements are dropped within the drag and drop overlay and ignored for the other parts of the `UploadCollection`.
   */
  onDrop?: DragEventHandler<UploadCollectionDomRef>;
  /**
   * Fired when the delete button of any item is pressed.
   */
  onItemDelete?: (event: Ui5CustomEvent<UploadCollectionDomRef, UploadCollectionItemDeleteEventDetail>) => void;
  /**
   * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
   */
  onSelectionChange?: (
    event: Ui5CustomEvent<UploadCollectionDomRef, UploadCollectionSelectionChangeEventDetail>
  ) => void;
}

/**
 * This component allows you to represent files before uploading them to a server, with the help of `UploadCollection-item`. It also allows you to show already uploaded files.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-UploadCollection)
 */
const UploadCollection = withWebComponent<UploadCollectionPropTypes, UploadCollectionDomRef>(
  'ui5-upload-collection',
  ['accessibleName', 'mode', 'noDataDescription', 'noDataText'],
  ['hideDragOverlay'],
  ['header'],
  ['drop', 'item-delete', 'selection-change'],
  () => import('@ui5/webcomponents-fiori/dist/UploadCollection.js')
);

UploadCollection.displayName = 'UploadCollection';

UploadCollection.defaultProps = {
  mode: ListMode.None
};

export { UploadCollection };
