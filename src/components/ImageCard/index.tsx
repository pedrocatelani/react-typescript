import { Card } from 'antd';
import './styles.scss';

type CardProps = {
  imageUrl: string;
  title?: string;
  desc?: string;
};

const { Meta } = Card;

function ImageCard({ imageUrl, title, desc }: CardProps) {
  return (
    <div className="card">
      <Card hoverable style={{ width: 250 }} cover={<img alt="ImageCard" src={imageUrl} />}>
        <Meta title={title} description={desc} />
      </Card>
    </div>
  );
}

export { ImageCard };
