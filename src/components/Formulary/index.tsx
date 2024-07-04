import { Form, Button, Input, Select, Space } from 'antd';
import { objectArray } from './constants';
import { usePersonContext } from '../../contexts/person';
import { Person } from '../../contexts/types';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

// const layout = {
//   labelCol: { span: 4 },
//   wrapperCol: { span: 12 },
// };

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};

function Formulary() {
  const nav = useNavigate();
  const [form] = Form.useForm();
  const { person, setPerson } = usePersonContext();

  const onOptionChange = (value: string) => {
    switch (value) {
      case 'name':
        form.setFieldsValue({ note: 'Insira seu nome:' });
        break;
      case 'age':
        form.setFieldsValue({ note: 'Insira sua idade:' });
        break;
      case 'gender':
        form.setFieldsValue({ note: 'Qual seu gênero?' });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
    const newPerson: Person = {
      name: values['name'],
      gender: values['gender'],
      another: values['customGender']
    };

    setPerson(newPerson);
    nav('/home');
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="form">
      <Form
        // {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        layout="horizontal"
        labelCol={{ span: 7 }}
      >
        <Form.Item name="name" label="Nome" rules={[{ required: true }]}>
          <Input placeholder="Digite." />
        </Form.Item>
        <Form.Item name="gender" label="Gênero" rules={[{ required: true }]}>
          <Select
            placeholder={'Selecione.'}
            onChange={onOptionChange}
            allowClear
            options={objectArray}
          />
          {/* <Option value="option 2">Option 1</Option>
          <Option value="option 1">Option 2</Option>
          <Option value="another">Another</Option> 
            ESSA MANEIRA ESTÁ DEPRECIADA!!!!!
          */}
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'another' ? (
              <Form.Item name="customGender" label="Qual?" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export { Formulary };
