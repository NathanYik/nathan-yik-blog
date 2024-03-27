import { component$, inlinedQrl } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1
        class="cursor-pointer p-6 text-center text-4xl font-bold text-blue-500"
        onClick$={() => alert("hi")}
      >
        Hi
      </h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et
        doloribus atque dolorum porro illum, omnis tempora hic corrupti eum
        quibusdam ea praesentium deserunt vel nihil consequuntur aliquam officia
        in.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat
        nostrum consectetur reprehenderit, aut praesentium totam ipsum nemo enim
        placeat alias eum. Id velit culpa sit accusamus quam doloremque cum.
        Nihil id iure inventore! Quas et maxime cumque. Facere, adipisci cum
        velit ab totam culpa quibusdam voluptatibus deserunt! Aliquam velit
        deleniti laboriosam odio explicabo eos, rem in consectetur incidunt
        cumque. Laudantium error odit placeat ipsa id labore sunt, architecto
        incidunt, reiciendis explicabo soluta nisi reprehenderit necessitatibus
        quo expedita voluptas hic omnis illo corporis unde modi assumenda.
        Cumque corrupti id recusandae? Neque consectetur repellat enim nostrum,
        numquam, aliquid, ipsam eaque doloribus sed aut corrupti! Quos quas
        molestias dicta inventore iste vero at eos numquam? Quis perferendis
        facere a rem debitis autem? Aspernatur excepturi, corporis debitis
        aperiam repudiandae perferendis suscipit eos sed, modi vero alias sint
        deserunt tempora. Magni dolor numquam praesentium laudantium eum,
        officiis, ullam ipsam eos impedit facere neque! Exercitationem.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
