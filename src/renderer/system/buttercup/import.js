import { showPasswordDialog } from '../dialog';
import { getArchive, saveWorkspace } from './archive';

const { Archive } = window.Buttercup;

export function importHistoryFromRequest(request) {
  const { history } = request;
  const tempArchive = Archive.createFromHistory(history);
  const mainArchive = getArchive();

  tempArchive.getGroups().forEach(group => {
    group.moveTo(mainArchive);
  });

  saveWorkspace();
}

export function showHistoryPasswordPrompt() {
  return showPasswordDialog(null, {
    title: 'KeePass Password',
    confirmButtonText: 'Import KeePass Archive',
    cancelButtonText: 'Cancel Import'
  });
}
