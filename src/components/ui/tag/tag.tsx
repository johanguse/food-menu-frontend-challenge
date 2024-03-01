import { tagStyles } from './tag-styles';

export type TagProps = {
  text: string;
  tagVariant?: 'primary';
};

export default function Tag({ text, tagVariant = 'primary' }: TagProps) {
  if (!text) {
    return null;
  }

  const className = tagStyles({ variant: tagVariant });

  return <div className={className}>{text}</div>;
}
