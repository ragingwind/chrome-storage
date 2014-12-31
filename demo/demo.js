window.addEventListener('polymer-ready', function() {
  var storage = document.querySelector('chrome-storage');

  storage.addEventListener('chrome-storage-load', function(e) {
    console.log('event> chrome-storage-load', e.detail);
  });

  storage.addEventListener('chrome-storage-save', function(e) {
    console.log('event> chrome-storage-save', storage.value);
  });

  storage.addEventListener('chrome-storage-remove', function(e) {
    console.log('event> chrome-storage-remove');
  });

  storage.addEventListener('chrome-storage-clear', function(e) {
    console.log('event> chrome-storage-clear');
  });

  storage.addEventListener('chrome-storage-bytes-in-use', function(e) {
    console.log('event> chrome-storage-bytes-in-use', e.detail);
  });

  console.log('storage is ready', storage.name, storage.value);

  storage.value = 'storage';
  storage.save();

  storage.getBytesInUse();

  storage.remove('chrome');

  storage.clear();
});
