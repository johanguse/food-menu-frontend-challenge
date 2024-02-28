import { tagStyles } from './tag-styles';

export type TagProps = {
  text: string;
  tagVariant?: 'primary' | 'secondary';
};

export default function Tag({ text }: TagProps) {
  if (!text) {
    return null;
  }

  return <div className={tagStyles()}>{text}</div>;
}
