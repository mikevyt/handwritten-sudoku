import tensorflow as tf
import numpy as np


def interpret(dataURL):
    model = tf.keras.models.load_model('model.h5',
                                       custom_objects={"softmax_v2": tf.nn.softmax})

    image_base64 = _get_base_url(dataURL)
    image_bytes = tf.io.decode_base64(image_base64)
    image_tensor = tf.io.decode_png(image_bytes, channels=3)
    formatted_image = _format_image(image_tensor)

    batch_input = np.expand_dims(formatted_image, axis=0)
    confidences = model.predict(batch_input)
    print(confidences)
    return np.argmax(confidences)


def _get_base_url(dataURL: str) -> str:
    return dataURL[dataURL.find(',') + 1:].replace('+', '-').replace('/', '_')


def _format_image(image_tensor):
    # TODO: Find out types
    cropped_image = tf.image.resize(image_tensor,
                                    [34, 34],
                                    method=tf.image.ResizeMethod.NEAREST_NEIGHBOR,
                                    preserve_aspect_ratio=True,
                                    antialias=False,
                                    name=None
                                    )
    cropped_image = tf.image.resize_with_crop_or_pad(cropped_image, 28, 28)
    grayscale_image = tf.image.rgb_to_grayscale(cropped_image)
    return grayscale_image
