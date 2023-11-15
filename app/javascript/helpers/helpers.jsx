//バリデーション
export const isEmptyObject = obj => Object.keys(obj).length === 0;

export const validateEvent = (event) => {
  const errors = {};

  if (event.event_type === '') {
    errors.event_type = 'イベントタイプを入力してください。';
  }

  if (event.event_date === '') {
    errors.event_date = 'イベントの日程を入力してください。';
  }

  if (event.title === '') {
    errors.title = '"タイトルを入力してください。';
  }

  if (event.speaker === '') {
    errors.speaker = '少なくとも1人のスピーカーをエントリーする必要があります。';
  }

  if (event.host === '') {
    errors.host = '少なくとも1つのホストを入力する必要があります。';
  }

  return errors;
}