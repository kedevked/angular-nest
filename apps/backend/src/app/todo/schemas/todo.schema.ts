import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  name: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

TodoSchema.set('toJSON', {
  virtuals: true,
  transform: function (_doc: unknown, ret: { _id: unknown; }) {   delete ret._id  }
});
