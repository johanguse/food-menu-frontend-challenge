export default function Textarea() {
  return (
    <div className="flex w-full border-t-4 border-gray-300 px-12 py-14">
      <textarea
        name="observacao"
        id="observacao"
        placeholder={
          'alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato'
        }
        className="mx-auto w-[644px] resize-none rounded-[4px] border p-2 text-sm text-gray-700 placeholder:text-sm placeholder:font-normal placeholder:text-gray-400"
        rows={2}
      />
    </div>
  );
}
