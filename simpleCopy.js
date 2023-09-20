function copyContent(id, useTooltip = true) {
  var element = document.getElementById(id);
  var textToCopy = '';

  if (element) {
    if (element.hasAttribute('data-copy')) {
      textToCopy = element.getAttribute('data-copy');
    } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      textToCopy = element.value;
    } else {
      textToCopy = element.textContent;
    }
  }

  if (textToCopy) {
    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    try {
      document.execCommand('copy');
      if (useTooltip) {
        showTooltip('Teks berhasil disalin!');
      }
    } catch (err) {
      if (useTooltip) {
        showTooltip('Tidak dapat menyalin teks. Cobalah secara manual.');
      }
    }

    document.body.removeChild(textarea);
  }
}

function showTooltip(message) {
  var tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = message;

  document.body.appendChild(tooltip);

  setTimeout(function () {
    document.body.removeChild(tooltip);
  }, 2000);
}

module.exports = {
  copyContent,
  showTooltip,
};
