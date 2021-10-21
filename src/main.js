import './assets/styles/layout.scss';
import './assets/demo/flags/flags.css';

import { createApp, reactive } from 'vue';
import router from './router';
import App from './App.vue';

import primevue from 'primevue';

import CodeHighlight from './AppCodeHighlight';

router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(App);

app.config.globalProperties.$appState = reactive({ theme: 'saga-blue' });

app.use(primevue.config.default, { ripple: true, inputStyle: 'outlined' });
app.use(primevue.confirmationservice);
app.use(primevue.toastservice);
app.use(router);

app.directive('tooltip', primevue.tooltip);
app.directive('ripple', primevue.ripple);
app.directive('code', CodeHighlight);
app.directive('badge', primevue.badgedirective);
app.directive('styleclass', primevue.styleclass);

app.component('Accordion', primevue.accordion);
app.component('AccordionTab', primevue.accordiontab);
app.component('AutoComplete', primevue.autocomplete);
app.component('Avatar', primevue.avatar);
app.component('AvatarGroup', primevue.avatargroup);
app.component('Badge', primevue.badge);
app.component('Breadcrumb', primevue.breadcrumb);
app.component('Button', primevue.button);
app.component('Calendar', primevue.calendar);
app.component('Card', primevue.card);
app.component('Carousel', primevue.carousel);
app.component('Chart', primevue.chart);
app.component('Checkbox', primevue.checkbox);
app.component('Chip', primevue.chip);
app.component('Chips', primevue.chips);
app.component('ColorPicker', primevue.colorpicker);
app.component('Column', primevue.column);
app.component('ConfirmDialog', primevue.confirmdialog);
app.component('ConfirmPopup', primevue.confirmpopup);
app.component('ContextMenu', primevue.contextmenu);
app.component('DataTable', primevue.datatable);
app.component('DataView', primevue.dataview);
app.component('DataViewLayoutOptions', primevue.dataviewlayoutoptions);
app.component('Dialog', primevue.dialog);
app.component('Divider', primevue.divider);
app.component('Dropdown', primevue.dropdown);
app.component('Fieldset', primevue.fieldset);
app.component('FileUpload', primevue.fileupload);
app.component('InlineMessage', primevue.inlinemessage);
app.component('Inplace', primevue.inplace);
app.component('InputMask', primevue.inputmask);
app.component('InputNumber', primevue.inputnumber);
app.component('InputSwitch', primevue.inputswitch);
app.component('InputText', primevue.inputtext);
app.component('Galleria', primevue.galleria);
app.component('Knob', primevue.knob);
app.component('Listbox', primevue.listbox);
app.component('MegaMenu', primevue.megamenu);
app.component('Menu', primevue.menu);
app.component('Menubar', primevue.menubar);
app.component('Message', primevue.message);
app.component('MultiSelect', primevue.multiselect);
app.component('OrderList', primevue.orderlist);
app.component('OrganizationChart', primevue.organizationchart);
app.component('OverlayPanel', primevue.overlaypanel);
app.component('Paginator', primevue.paginator);
app.component('Panel', primevue.panel);
app.component('PanelMenu', primevue.panelmenu);
app.component('Password', primevue.password);
app.component('PickList', primevue.picklist);
app.component('ProgressBar', primevue.progressbar);
app.component('RadioButton', primevue.radiobutton);
app.component('Rating', primevue.rating);
app.component('SelectButton', primevue.selectbutton);
app.component('ScrollPanel', primevue.scrollpanel);
app.component('ScrollTop', primevue.scrolltop);
app.component('Slider', primevue.slider);
app.component('Sidebar', primevue.sidebar);
app.component('Skeleton', primevue.skeleton);
app.component('SplitButton', primevue.splitbutton);
app.component('Splitter', primevue.splitter);
app.component('SplitterPanel', primevue.splitterpanel);
app.component('Steps', primevue.steps);
app.component('TabMenu', primevue.tabmenu);
app.component('TabView', primevue.tabview);
app.component('TabPanel', primevue.tabpanel);
app.component('Tag', primevue.tag);
app.component('Textarea', primevue.textarea);
app.component('TieredMenu', primevue.tieredmenu);
app.component('Timeline', primevue.timeline);
app.component('Toast', primevue.toast);
app.component('Toolbar', primevue.toolbar);
app.component('ToggleButton', primevue.togglebutton);
app.component('Tree', primevue.tree);
app.component('TreeTable', primevue.treetable);
app.component('TriStateCheckbox', primevue.tristatecheckbox);

app.mount('#app');